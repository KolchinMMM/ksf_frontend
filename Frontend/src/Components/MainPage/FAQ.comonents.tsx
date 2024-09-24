import {Flex} from "@mantine/core"
import { Accordion } from '@mantine/core';
import "../../assets/FAQ.css"

export default function FAQ(){

    const questions = {
        "Почему я задаю вопрос в онлайн чате, а оператор мне не отвечает?": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum viverra nisl sed ornare. Integer imperdiet iaculis magna. In venenatis laoreet dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur faucibus ex risus, et cursus turpis luctus in. Nulla sit amet mi malesuada nulla pellentesque rutrum. Etiam eu massa non neque vestibulum consectetur. Suspendisse potenti. Proin et lectus lacus. ", 
        "Могу ли я вернуть стартовый взнос или перенести своё участие, если до момента мероприятия осталось менее 60 дней?": "Да",
        "Еще Faq": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum viverra nisl sed ornare. Integer imperdiet iaculis magna. In venenatis laoreet dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur faucibus ex risus, et cursus turpis luctus in. Nulla sit amet mi malesuada nulla pellentesque rutrum. Etiam eu massa non neque vestibulum consectetur. Suspendisse potenti. Proin et lectus lacus. Donec fermentum risus nec ante placerat aliquet. Aliquam a leo ultrices, volutpat diam vitae, lobortis tellus. Fusce sed cursus est. Praesent iaculis tincidunt risus non venenatis. Suspendisse pretium sapien ligula, ut fringilla arcu pulvinar eget. Donec aliquam sodales lorem. Donec quis nulla sit amet metus placerat pretium. Donec ultricies, urna id tempus condimentum, magna metus sagittis leo, sed mattis nisi massa id est. Morbi convallis, lectus sit amet imperdiet vestibulum, ipsum tellus ultricies magna, a faucibus nisl mauris nec tellus. Donec et convallis risus, eget fermentum urna. Ut at efficitur ipsum. Aenean blandit dolor et hendrerit tempor. Duis nec massa risus. Donec placerat est eu enim tempor, vel ullamcorper lorem aliquet. Donec nulla ante, volutpat et porta eget, lobortis sed libero. In velit magna, sodales a iaculis a, lacinia sed risus. Vivamus arcu nunc, malesuada vitae rutrum sit amet, dictum at massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In venenatis tincidunt nisi nec dignissim. Curabitur ac velit pharetra, consectetur nisl volutpat, bibendum eros. Mauris vel libero sapien. Suspendisse facilisis mauris ac vulputate ullamcorper. Proin in sem velit. Fusce felis purus, tincidunt pretium tellus nec, pretium egestas diam. Curabitur bibendum nunc mollis, porta dui vel, scelerisque odio. Sed magna lorem, consequat in gravida a, vestibulum nec massa. Maecenas eu tristique purus, nec ultricies neque. Donec diam quam, dapibus sit amet pulvinar a, eleifend quis ex. Nunc tellus risus, ultricies at justo a, ultricies dapibus nibh. Ut sit amet eros erat. Aenean ac nunc et mi vestibulum mattis eget sed ante. In vel feugiat sapien, suscipit volutpat risus. Praesent maximus, ipsum in facilisis finibus, odio sem tempor ex, et tempus quam nisi nec magna. Phasellus eu diam gravida, ullamcorper nulla sed, varius orci. Mauris id tortor et magna consectetur mattis vel eget velit. In porta mauris a orci vehicula vulputate. Ut mattis vehicula maximus. Etiam porta risus mi, id auctor elit varius vel. Mauris fermentum consectetur augue, et consequat eros tempus et. Curabitur dignissim bibendum eros, non imperdiet lacus vulputate quis. Cras et nisi quam. ",
    }

    return (
        <Flex w="100%" p="5px 5% 25px 5%">
            <Accordion className="faqAccordion" variant="contained" w="100%">
                {
                    Object.entries(questions).map(([key, value]) => (
                        <Accordion.Item className="jopa" key={key} value={key}>
                          <Accordion.Control>{key}</Accordion.Control>
                          <Accordion.Panel>{value}</Accordion.Panel>
                        </Accordion.Item>))
                }
            </Accordion>
        </Flex>
    ) 
}
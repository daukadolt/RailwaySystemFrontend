export default function log(context) {
    console.log(context);
    return context.next();
}
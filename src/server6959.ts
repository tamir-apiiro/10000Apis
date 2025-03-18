
const express = require('express')
import {handler6959} from "./handler6959";
const app = express()
app.get('/6959', handler6959)
app.listen(3000, () => {})
        
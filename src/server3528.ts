
const express = require('express')
import {handler3528} from "./handler3528";
const app = express()
app.get('/3528', handler3528)
app.listen(3000, () => {})
        
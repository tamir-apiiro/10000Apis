
const express = require('express')
import {handler3367} from "./handler3367";
const app = express()
app.get('/3367', handler3367)
app.listen(3000, () => {})
        
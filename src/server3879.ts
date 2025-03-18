
const express = require('express')
import {handler3879} from "./handler3879";
const app = express()
app.get('/3879', handler3879)
app.listen(3000, () => {})
        
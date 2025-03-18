
const express = require('express')
import {handler3371} from "./handler3371";
const app = express()
app.get('/3371', handler3371)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3846} from "./handler3846";
const app = express()
app.get('/3846', handler3846)
app.listen(3000, () => {})
        
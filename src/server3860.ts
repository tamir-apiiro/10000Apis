
const express = require('express')
import {handler3860} from "./handler3860";
const app = express()
app.get('/3860', handler3860)
app.listen(3000, () => {})
        
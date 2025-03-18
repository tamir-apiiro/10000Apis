
const express = require('express')
import {handler3352} from "./handler3352";
const app = express()
app.get('/3352', handler3352)
app.listen(3000, () => {})
        
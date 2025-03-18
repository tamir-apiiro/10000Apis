
const express = require('express')
import {handler3635} from "./handler3635";
const app = express()
app.get('/3635', handler3635)
app.listen(3000, () => {})
        
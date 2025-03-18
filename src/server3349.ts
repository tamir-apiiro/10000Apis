
const express = require('express')
import {handler3349} from "./handler3349";
const app = express()
app.get('/3349', handler3349)
app.listen(3000, () => {})
        
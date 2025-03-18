
const express = require('express')
import {handler3428} from "./handler3428";
const app = express()
app.get('/3428', handler3428)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3129} from "./handler3129";
const app = express()
app.get('/3129', handler3129)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3516} from "./handler3516";
const app = express()
app.get('/3516', handler3516)
app.listen(3000, () => {})
        
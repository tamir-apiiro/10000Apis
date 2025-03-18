
const express = require('express')
import {handler3180} from "./handler3180";
const app = express()
app.get('/3180', handler3180)
app.listen(3000, () => {})
        
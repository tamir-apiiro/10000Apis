
const express = require('express')
import {handler3956} from "./handler3956";
const app = express()
app.get('/3956', handler3956)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3474} from "./handler3474";
const app = express()
app.get('/3474', handler3474)
app.listen(3000, () => {})
        
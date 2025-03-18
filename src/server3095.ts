
const express = require('express')
import {handler3095} from "./handler3095";
const app = express()
app.get('/3095', handler3095)
app.listen(3000, () => {})
        
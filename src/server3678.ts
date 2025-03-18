
const express = require('express')
import {handler3678} from "./handler3678";
const app = express()
app.get('/3678', handler3678)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3212} from "./handler3212";
const app = express()
app.get('/3212', handler3212)
app.listen(3000, () => {})
        
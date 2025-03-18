
const express = require('express')
import {handler3610} from "./handler3610";
const app = express()
app.get('/3610', handler3610)
app.listen(3000, () => {})
        
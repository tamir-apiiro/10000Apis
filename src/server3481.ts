
const express = require('express')
import {handler3481} from "./handler3481";
const app = express()
app.get('/3481', handler3481)
app.listen(3000, () => {})
        
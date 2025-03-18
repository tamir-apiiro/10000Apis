
const express = require('express')
import {handler3397} from "./handler3397";
const app = express()
app.get('/3397', handler3397)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6397} from "./handler6397";
const app = express()
app.get('/6397', handler6397)
app.listen(3000, () => {})
        

const express = require('express')
import {handler397} from "./handler397";
const app = express()
app.get('/397', handler397)
app.listen(3000, () => {})
        
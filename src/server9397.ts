
const express = require('express')
import {handler9397} from "./handler9397";
const app = express()
app.get('/9397', handler9397)
app.listen(3000, () => {})
        
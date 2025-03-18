
const express = require('express')
import {handler9205} from "./handler9205";
const app = express()
app.get('/9205', handler9205)
app.listen(3000, () => {})
        
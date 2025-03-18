
const express = require('express')
import {handler9657} from "./handler9657";
const app = express()
app.get('/9657', handler9657)
app.listen(3000, () => {})
        
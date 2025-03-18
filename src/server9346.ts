
const express = require('express')
import {handler9346} from "./handler9346";
const app = express()
app.get('/9346', handler9346)
app.listen(3000, () => {})
        
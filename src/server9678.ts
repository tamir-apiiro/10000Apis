
const express = require('express')
import {handler9678} from "./handler9678";
const app = express()
app.get('/9678', handler9678)
app.listen(3000, () => {})
        
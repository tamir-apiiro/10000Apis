
const express = require('express')
import {handler9705} from "./handler9705";
const app = express()
app.get('/9705', handler9705)
app.listen(3000, () => {})
        
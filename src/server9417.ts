
const express = require('express')
import {handler9417} from "./handler9417";
const app = express()
app.get('/9417', handler9417)
app.listen(3000, () => {})
        
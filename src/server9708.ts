
const express = require('express')
import {handler9708} from "./handler9708";
const app = express()
app.get('/9708', handler9708)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9393} from "./handler9393";
const app = express()
app.get('/9393', handler9393)
app.listen(3000, () => {})
        
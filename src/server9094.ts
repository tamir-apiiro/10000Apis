
const express = require('express')
import {handler9094} from "./handler9094";
const app = express()
app.get('/9094', handler9094)
app.listen(3000, () => {})
        

const express = require('express')
import {handler9296} from "./handler9296";
const app = express()
app.get('/9296', handler9296)
app.listen(3000, () => {})
        
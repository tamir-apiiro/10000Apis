
const express = require('express')
import {handler9083} from "./handler9083";
const app = express()
app.get('/9083', handler9083)
app.listen(3000, () => {})
        
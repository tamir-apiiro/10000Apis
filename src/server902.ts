
const express = require('express')
import {handler902} from "./handler902";
const app = express()
app.get('/902', handler902)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4259} from "./handler4259";
const app = express()
app.get('/4259', handler4259)
app.listen(3000, () => {})
        
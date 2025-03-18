
const express = require('express')
import {handler4312} from "./handler4312";
const app = express()
app.get('/4312', handler4312)
app.listen(3000, () => {})
        
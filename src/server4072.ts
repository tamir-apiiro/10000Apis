
const express = require('express')
import {handler4072} from "./handler4072";
const app = express()
app.get('/4072', handler4072)
app.listen(3000, () => {})
        
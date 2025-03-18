
const express = require('express')
import {handler4477} from "./handler4477";
const app = express()
app.get('/4477', handler4477)
app.listen(3000, () => {})
        
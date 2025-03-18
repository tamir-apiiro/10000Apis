
const express = require('express')
import {handler4108} from "./handler4108";
const app = express()
app.get('/4108', handler4108)
app.listen(3000, () => {})
        
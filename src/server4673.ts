
const express = require('express')
import {handler4673} from "./handler4673";
const app = express()
app.get('/4673', handler4673)
app.listen(3000, () => {})
        
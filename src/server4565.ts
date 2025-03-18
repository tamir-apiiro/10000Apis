
const express = require('express')
import {handler4565} from "./handler4565";
const app = express()
app.get('/4565', handler4565)
app.listen(3000, () => {})
        
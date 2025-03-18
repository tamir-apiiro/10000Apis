
const express = require('express')
import {handler4376} from "./handler4376";
const app = express()
app.get('/4376', handler4376)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4771} from "./handler4771";
const app = express()
app.get('/4771', handler4771)
app.listen(3000, () => {})
        
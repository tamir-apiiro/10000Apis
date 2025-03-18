
const express = require('express')
import {handler4858} from "./handler4858";
const app = express()
app.get('/4858', handler4858)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4458} from "./handler4458";
const app = express()
app.get('/4458', handler4458)
app.listen(3000, () => {})
        
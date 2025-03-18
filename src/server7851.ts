
const express = require('express')
import {handler7851} from "./handler7851";
const app = express()
app.get('/7851', handler7851)
app.listen(3000, () => {})
        
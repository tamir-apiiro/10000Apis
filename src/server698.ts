
const express = require('express')
import {handler698} from "./handler698";
const app = express()
app.get('/698', handler698)
app.listen(3000, () => {})
        
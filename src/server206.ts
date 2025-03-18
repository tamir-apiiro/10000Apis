
const express = require('express')
import {handler206} from "./handler206";
const app = express()
app.get('/206', handler206)
app.listen(3000, () => {})
        